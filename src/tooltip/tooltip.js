import {customAttribute, inject, WidgetBase, constants, generateBindables} from '../common/common';

import 'ej.tooltip.min';

@customAttribute(`${constants.attributePrefix}tooltip`)
@generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'enableInteraction', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'target', 'template', 'title', 'trigger', 'width'], [], {'enableRTL': 'enableRtl'})
@inject(Element)
export class ejTooltip extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}
