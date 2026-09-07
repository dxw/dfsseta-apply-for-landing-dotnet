# Set the major version of dotnet
ARG DOTNET_VERSION=8.0
# Set the major version of nodejs
ARG NODEJS_VERSION_MAJOR=22

########################### Commented out because we don't have assets yet! ###########################
# # ASSETS - Build frontend assets using node js
# FROM "node:${NODEJS_VERSION_MAJOR}-bullseye-slim" AS assets
# WORKDIR /src

# # - Restore package.json alone to cache expensive restoration work
# #     Note - Docker COPY caches are invalidated when a file to be copied has changed, then subsequent layers (like `npm ci`) are also invalidated
# COPY --link package.json package-lock.json /
# RUN npm ci

# # - Now we can copy all asset-related things over
# COPY --link ./src/Dfsseta.ApplyForLanding/assets/ /src/Dfsseta.ApplyForLanding/assets/
# RUN npm run build

#######################################################################################################
### BUILD
FROM mcr.microsoft.com/dotnet/sdk:${DOTNET_VERSION} AS build
WORKDIR /src

# - Copy and restore csproj alone to cache expensive restoration work
#     Note - Docker COPY caches are invalidated when a file to be copied has changed, then subsequent layers (like `dotnet restore`) are also invalidated
COPY --link ./src/Dfsseta.ApplyForLanding/Dfsseta.ApplyForLanding.csproj /src/Dfsseta.ApplyForLanding/
RUN ["dotnet", "restore", "Dfsseta.ApplyForLanding/Dfsseta.ApplyForLanding.csproj"]

# - Now copy everything else over (these are the files most likely to have changed)
COPY --link ./src/ /src
WORKDIR "/src/Dfsseta.ApplyForLanding"

# - Build and publish the application
RUN ["dotnet", "build", "Dfsseta.ApplyForLanding.csproj", "--no-restore", "--configuration", "Release"]
RUN ["dotnet", "publish", "Dfsseta.ApplyForLanding.csproj", "--no-build", "--configuration", "Release", "--output", "/app/publish", "/p:UseAppHost=false"]


#######################################################################################################
### RUNTIME
FROM "mcr.microsoft.com/dotnet/aspnet:${DOTNET_VERSION}-azurelinux3.0" AS runtime

# These commands are ordered by "least likely to change" to enable effective caching
LABEL org.opencontainers.image.source="https://github.com/dxw/dfsseta-apply-for-landing-dotnet"
WORKDIR /app
EXPOSE 8080

ENTRYPOINT ["/bin/bash", "./docker-entrypoint.sh", "dotnet", "Dfsseta.ApplyForLanding.dll"]

COPY --link docker-entrypoint.sh /app
RUN ["chmod", "+x", "/app/docker-entrypoint.sh"]

########################### Commented out because we don't have assets yet! ###########################
#COPY --link --from=assets /app/wwwroot /app/wwwroot

COPY --link --from=build /app/publish /app

# This is the user that the image will use, it has less permissions so needs to be after everything else is configured
USER $APP_UID
