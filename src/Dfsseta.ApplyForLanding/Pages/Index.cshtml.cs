using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Dfsseta.ApplyForLanding.Pages;

public class IndexModel(ILogger<IndexModel> logger) : BasePageModel("Apply for landing")
{
    private readonly ILogger<IndexModel> _logger = logger;

    public string[] LandableBodies { get; set; } = [];

    public void OnGet()
    {
        LandableBodies =
        [
            "Mars",
            "Saturn (core)",
            "International Space Station (ESA)",
            "Tiangong space station",
            "Earth's moon",
            "Pluto"
        ];
    }
}
