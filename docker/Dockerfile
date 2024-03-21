ARG ASPNET_IMAGE_TAG=8.0-bookworm-slim-amd64
ARG DOTNET_SDK=8.0

FROM mcr.microsoft.com/dotnet/sdk:${DOTNET_SDK} AS publish
COPY . .
RUN dotnet restore Dfsseta.ApplyForLanding
RUN dotnet build Dfsseta.ApplyForLanding -c Release --no-restore
RUN dotnet publish Dfsseta.ApplyForLanding -c Release -o /app --no-build

COPY ./docker/web-docker-entrypoint.sh /app/docker-entrypoint.sh

FROM mcr.microsoft.com/dotnet/aspnet:${ASPNET_IMAGE_TAG} AS final
COPY --from=publish /app /app
WORKDIR /app
RUN chmod +x ./docker-entrypoint.sh
EXPOSE 80/tcp
