# 2. Use ASP.NET Core Razor Pages

Date: 2024-05-10

## Status

Accepted

## Context

The DfSSETA Apply for Landing .NET application is intended to serve as:
- A reference model for development of client and internal .NET applications.
- A place to form a .NET application that adheres to dxw standards of development.
- A learning tool for developers less familiar with C# and .NET.

Therefore, we must choose the most appropriate framework for the development of this application.

### Using a web UI

The application must represent a .NET version of the [Ruby implementation of the Apply for Landing application][1] which
uses the full-stack Ruby on Rails framework.

### Web UI options

[ASP.NET Core provides multiple web UIs to choose from][2]. These include:
- ASP.NET Core Blazor.
- ASP.NET Core Razor Pages.
- ASP.NET Core MVC.
- ASP.NET Core Single Page Applications (SPA) with frontend JavaScript frameworks.

### ASP.NET Core Razor Pages

Razor Pages is the framework most commonly used on client projects. For example, the [Department for Education Find 
Information about Academies and Trusts app][3].

[Razor Pages][4] is preferred over ASP.NET Core MVC as it makes coding page-focused scenarios easier and more productive
than using controllers and views.

It is simpler in terms of coding languages, frameworks, and tools required than a SPA solution would be.

### Hybrid solutions

Whilst the frameworks can be used together as a hybrid solution, we should aim to keep this application simple so it can
best meet its intended purposes.

## Decision

We will use ASP.NET Core Razor Pages as the development framework for this application.

## Consequences

- The application will be less similar to the Ruby on Rails implementation of Apply for Landing than it would be if it 
  used ASP.NET Core MVC. This may make it harder to approach as a learning tool for developers who primarily use Ruby on 
  Rails.
- The application will not serve as an exact template for .NET applications which use other frameworks.
- [Blazor is currently recommended by Microsoft for most web UI scenarios][5].

[1]: https://github.com/dxw/dfsseta-apply-for-landing-ruby
[2]: https://learn.microsoft.com/en-us/aspnet/core/tutorials/choose-web-ui
[3]: https://github.com/DFE-Digital/find-information-about-academies-and-trusts
[4]: https://learn.microsoft.com/en-us/aspnet/core/razor-pages
[5]: https://learn.microsoft.com/en-us/aspnet/core/tutorials/choose-web-ui#aspnet-core-blazor