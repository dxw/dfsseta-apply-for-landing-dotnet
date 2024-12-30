import { BasePage, BasePageAssertions } from './base-page';

export class HomePage extends BasePage {
    expect: BasePageAssertions = new HomePageAssertions(this);

    pageHeading: string = 'Apply for landing';
    browserPageTitle: string = 'Apply for landing - Dfsseta.ApplyForLanding';
    pageUrl: string = '/';
}

class HomePageAssertions extends BasePageAssertions { }
