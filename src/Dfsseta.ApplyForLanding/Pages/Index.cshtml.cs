using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dfsseta.ApplyForLanding.Pages;

public class IndexModel(ILogger<IndexModel> logger) : BasePageModel("Apply for landing")
{
    private readonly ILogger<IndexModel> _logger = logger;

    public void OnGet()
    {
        
    }
}
