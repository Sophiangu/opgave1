import { mount } from '@vue/test-utils';
import TheWelcome from '@/components/TheWelcome.vue';
import WelcomeItem from '@/components/WelcomeItem.vue';
import DocumentationIcon from '@/components/icons/IconDocumentation.vue';
import ToolingIcon from '@/components/icons/IconTooling.vue';
import EcosystemIcon from '@/components/icons/IconEcosystem.vue';
import CommunityIcon from '@/components/icons/IconCommunity.vue';
import SupportIcon from '@/components/icons/IconSupport.vue';

describe('Welcome.vue', () => {
  it('renders WelcomeItems correctly', () => {
    const wrapper = mount(TheWelcome);

    const welcomeItems = wrapper.findAllComponents(WelcomeItem);
    expect(welcomeItems).toHaveLength(5);

    // Test første WelcomeItem
    expect(welcomeItems[0].findComponent(DocumentationIcon).exists()).toBe(true);
    expect(welcomeItems[0].find('template[slot=heading]').text()).toBe('Documentation');
    expect(welcomeItems[0].text()).toContain('official documentation');

    // Test andet WelcomeItem
    expect(welcomeItems[1].findComponent(ToolingIcon).exists()).toBe(true);
    expect(welcomeItems[1].find('template[slot=heading]').text()).toBe('Tooling');
    expect(welcomeItems[1].text()).toContain('This project is served and bundled with');

    // Test tredje WelcomeItem
    expect(welcomeItems[2].findComponent(EcosystemIcon).exists()).toBe(true);
    expect(welcomeItems[2].find('template[slot=heading]').text()).toBe('Ecosystem');
    expect(welcomeItems[2].text()).toContain('Get official tools and libraries for your project');

    // Test fjerde WelcomeItem
    expect(welcomeItems[3].findComponent(CommunityIcon).exists()).toBe(true);
    expect(welcomeItems[3].find('template[slot=heading]').text()).toBe('Community');
    expect(welcomeItems[3].text()).toContain('Got stuck? Ask your question on');

    // Test femte WelcomeItem
    expect(welcomeItems[4].findComponent(SupportIcon).exists()).toBe(true);
    expect(welcomeItems[4].find('template[slot=heading]').text()).toBe('Support Vue');
    expect(welcomeItems[4].text()).toContain('As an independent project, Vue relies on community backing');
  });
});
