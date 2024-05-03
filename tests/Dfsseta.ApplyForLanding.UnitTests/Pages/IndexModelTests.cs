using Dfsseta.ApplyForLanding.Pages;

using Microsoft.Extensions.Logging;

namespace Dfsseta.ApplyForLanding.UnitTests.Pages;

public class IndexModelTests
{
    private readonly IndexModel _sut;

    public IndexModelTests()
    {
        var fakeLogger = A.Fake<Logger<IndexModel>>();
        _sut = new IndexModel(fakeLogger);
    }
    
    [Fact]
    public void Heading_is_ApplyForLanding()
    {
        _sut.Heading.Should().Be("Apply for landing");
    }

    [Fact]
    public void OnGet_should_set_LandableBodies()
    {
     _sut.OnGet();
     _sut.LandableBodies.Should().Equal(
     [
         "Mars",
         "Saturn (core)",
         "International Space Station (ESA)",
         "Tiangong space station",
         "Earth's moon",
         "Pluto"
     ]);
    }
}
