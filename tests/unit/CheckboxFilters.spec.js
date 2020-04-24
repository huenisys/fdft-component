import { shallowMount } from "@vue/test-utils";
import CheckboxFilters from "@/components/CheckboxFilters.vue";

describe("CheckboxFilters.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(CheckboxFilters, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
