using Dfsseta.ApplyForLanding.Pages;

using Microsoft.Extensions.Logging;

namespace Dfsseta.ApplyForLanding.UnitTests.Pages;

public class IndexModelTests
{
    [Fact]
    public void ServiceName_is_ApplyForLanding()
    {
        var fakeLogger = A.Fake<Logger<IndexModel>>();
        var sut = new IndexModel(fakeLogger);
        sut.ServiceName.Should().Be("Apply for landing");
    }
}
