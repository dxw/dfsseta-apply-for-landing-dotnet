using Dfsseta.ApplyForLanding.Pages;

using Microsoft.Extensions.Logging;

namespace Dfsseta.ApplyForLanding.UnitTests.Pages;

public class IndexModelTests
{
    [Fact]
    public void Heading_is_ApplyForLanding()
    {
        var fakeLogger = A.Fake<Logger<IndexModel>>();
        var sut = new IndexModel(fakeLogger);
        sut.Heading.Should().Be("Apply for landing");
    }
}
