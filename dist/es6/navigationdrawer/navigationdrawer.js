import {WidgetBase} from '../common/widget-base';
import {constants} from '../common/constants';
import {generateBindables} from '../common/decorators';
import {customElement, inlineView, inject} from '../common/common';

import 'ej.navigationdrawer.min';

@customElement(`${constants.elementPrefix}navigation-drawer`)
@inlineView(`${constants.aureliaTemplateString}`)
@generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width', 'isPaneOpen'])
@inject(Element)
export class ejNavigationDrawer extends WidgetBase {
  constructor(element) {
    super();
    this.element = element;
  }
}

