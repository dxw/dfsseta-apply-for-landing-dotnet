using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dfsseta.ApplyForLanding.Pages;

public abstract class BasePageModel(string heading) : PageModel
{
    public string Heading { get; init; } = heading;
}
