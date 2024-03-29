import { Component, h } from "@stencil/core";
import { waitForAtomic } from "../../utils/atomic";
import template1 from "./template-1.html";
import template2 from "./template-2.html";

/**
 * Component used to manage results & result templates.
 * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
 */
@Component({
  tag: "results-manager",
  shadow: false,
})
export class ResultsManager {
  public async componentWillLoad() {
    return waitForAtomic();
  }

  public render() {
    return (
      <atomic-result-list>
        <atomic-result-template must-match-filetype="pdf">
          <template innerHTML={template1}></template>
        </atomic-result-template>
        <atomic-result-template>
          <template innerHTML={template2}></template>
        </atomic-result-template>
      </atomic-result-list>
    );
  }
}
