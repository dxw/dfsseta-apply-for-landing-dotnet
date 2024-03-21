using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dfsseta.ApplyForLanding.Pages;

public class IndexModel : PageModel
{
    private readonly ILogger<IndexModel> _logger;
    public string ServiceName => "Apply for landing";

    public IndexModel(ILogger<IndexModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {

    }
}
