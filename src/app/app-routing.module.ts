import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';

import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { DashboardAnalyticsComponent } from './pages/dashboard/dashboard-analytics/dashboard-analytics.component';
import { DashboardFinancialsComponent } from './pages/dashboard/dashboard-financials/dashboard-financials.component';
import { DashboardEcommerceComponent } from './pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component';

import { PageLayoutComponent } from './pages/page-layouts/page-layout/page-layout.component';
import { PageLayoutBlankPageComponent } from './pages/page-layouts/page-layout-blank-page/page-layout-blank-page.component';
import { PageLayoutOneColumnWideComponent } from './pages/page-layouts/page-layout-one-column-wide/page-layout-one-column-wide.component';
import { PageLayoutOneColumnBoxedComponent } from './pages/page-layouts/page-layout-one-column-boxed/page-layout-one-column-boxed.component';
import { PageLayoutTabbedHeaderComponent } from './pages/page-layouts/page-layout-tabbed-header/page-layout-tabbed-header.component';
import { PageLayoutLeftSidebarComponent } from './pages/page-layouts/page-layout-left-sidebar/page-layout-left-sidebar.component';
import { PageLayoutRightSidebarComponent } from './pages/page-layouts/page-layout-right-sidebar/page-layout-right-sidebar.component';
import { PageLayoutLeftAndrightSidebarsComponent } from './pages/page-layouts/page-layout-left-andright-sidebars/page-layout-left-andright-sidebars.component';

import { CustomPagesComponent } from './pages/custom-pages/custom-pages/custom-pages.component';
import { CustomPagesProfileComponent } from './pages/custom-pages/custom-pages-profile/custom-pages-profile.component';
import { CustomPagesHelpCenterComponent } from './pages/custom-pages/custom-pages-help-center/custom-pages-help-center.component';
import { CustomPagesSearchComponent } from './pages/custom-pages/custom-pages-search/custom-pages-search.component';
import { CustomPagesPricingTablesComponent } from './pages/custom-pages/custom-pages-pricing-tables/custom-pages-pricing-tables.component';
import { CustomPagesMyAccountComponent } from './pages/custom-pages/custom-pages-my-account/custom-pages-my-account.component';
import { CustomPagesInvoiceTemplateComponent } from './pages/custom-pages/custom-pages-invoice-template/custom-pages-invoice-template.component';

import { CardsComponent } from './pages/cards/cards/cards.component';
import { CardsContentTypesComponent } from './pages/cards/cards-content-types/cards-content-types.component';
import { CardsLayoutsComponent } from './pages/cards/cards-layouts/cards-layouts.component';
import { CardsNavigationComponent } from './pages/cards/cards-navigation/cards-navigation.component';
import { CardsActionComponent } from './pages/cards/cards-action/cards-action.component';

import { UiKitComponent } from './pages/ui-kit/ui-kit/ui-kit.component';
import { UiAlertsComponent } from './pages/ui-kit/ui-alerts/ui-alerts.component';
import { UiBadgesComponent } from './pages/ui-kit/ui-badges/ui-badges.component';
import { UiButtonsComponent } from './pages/ui-kit/ui-buttons/ui-buttons.component';
import { UiColorsComponent } from './pages/ui-kit/ui-colors/ui-colors.component';
import { UiIconsComponent } from './pages/ui-kit/ui-icons/ui-icons.component';
import { UiListGroupsComponent } from './pages/ui-kit/ui-list-groups/ui-list-groups.component';
import { UiPreLoadersComponent } from './pages/ui-kit/ui-pre-loaders/ui-pre-loaders.component';
import { UiProgressBarsComponent } from './pages/ui-kit/ui-progress-bars/ui-progress-bars.component';
import { UiTypographyComponent } from './pages/ui-kit/ui-typography/ui-typography.component';

import { ComponentComponent } from './pages/components/component/component.component';
import { ComponentCarouselsComponent } from './pages/components/component-carousels/component-carousels.component';
import { ComponentDropdownsComponent } from './pages/components/component-dropdowns/component-dropdowns.component';
import { ComponentModalsComponent } from './pages/components/component-modals/component-modals.component';
import { ComponentScrollableComponent } from './pages/components/component-scrollable/component-scrollable.component';
import { ComponentSweetalertComponent } from './pages/components/component-sweetalert/component-sweetalert.component';
import { ComponentTabsPillsComponent } from './pages/components/component-tabs-pills/component-tabs-pills.component';
import { ComponentTooltipPopoversComponent } from './pages/components/component-tooltip-popovers/component-tooltip-popovers.component';
import { ComponentUiblockingComponent } from './pages/components/component-uiblocking/component-uiblocking.component';

import { ChartsComponent } from './pages/charts/charts/charts.component';
import { ChartsChartJsComponent } from './pages/charts/charts-chart-js/charts-chart-js.component';
import { ChartsC3ChartsComponent } from './pages/charts/charts-c3-charts/charts-c3-charts.component';
import { ChartsMorrisComponent } from './pages/charts/charts-morris/charts-morris.component';
import { ChartsChartistComponent } from './pages/charts/charts-chartist/charts-chartist.component';

import { FormsComponent } from './pages/forms/forms/forms.component';
import { BasicElementComponent } from './pages/forms/basic-elements/basic-element/basic-element.component';
import { FormsBasicInputsComponent } from './pages/forms/basic-elements/forms-basic-inputs/forms-basic-inputs.component';
import { FormsCheckboxRadioComponent } from './pages/forms/basic-elements/forms-checkbox-radio/forms-checkbox-radio.component';
import { FormsInputGroupsComponent} from './pages/forms/basic-elements/forms-input-groups/forms-input-groups.component';

import { LayoutsComponent } from './pages/forms/layouts/layouts/layouts.component';
import { FormFormGridComponent } from './pages/forms/layouts/form-form-grid/form-form-grid.component';
import { FormFormGroupsComponent } from './pages/forms/layouts/form-form-groups/form-form-groups.component';

import { AdvancedElementComponent } from './pages/forms/advanced-elements/advanced-element/advanced-element.component';
import { FormDatePickersComponent } from './pages/forms/advanced-elements/form-date-pickers/form-date-pickers.component';
import { FormDropZoneComponent } from './pages/forms/advanced-elements/form-drop-zone/form-drop-zone.component';
import { FormInputMaskComponent } from './pages/forms/advanced-elements/form-input-mask/form-input-mask.component';
import { FormRangeSlidersComponent } from './pages/forms/advanced-elements/form-range-sliders/form-range-sliders.component';
import { FormSelect2Component } from './pages/forms/advanced-elements/form-select2/form-select2.component';
import { FormSwitchesComponent } from './pages/forms/advanced-elements/form-switches/form-switches.component';

import { ValidationComponent } from './pages/forms/validation/validation/validation.component';
import { FormBasicVailidationComponent} from './pages/forms/validation/form-basic-vailidation/form-basic-vailidation.component';
import { FormJqueryVailidationComponent } from './pages/forms/validation/form-jquery-vailidation/form-jquery-vailidation.component';

import { WizardComponent } from './pages/forms/wizards/wizard/wizard.component';
import { FormHorizontalWizardComponent } from './pages/forms/wizards/form-horizontal-wizard/form-horizontal-wizard.component';
import { FormVerticalWizardComponent } from './pages/forms/wizards/form-vertical-wizard/form-vertical-wizard.component';

import { TablesComponent } from './pages/tables/tables/tables.component';
import { TablesBasicTablesComponent } from './pages/tables/tables-basic-tables/tables-basic-tables.component';
import { TablesDataTablesComponent } from './pages/tables/tables-data-tables/tables-data-tables.component';

import { MailComponent } from './pages/mail/mail.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HelperCasesComponent } from './pages/helper-cases/helper-cases.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'dashboard', component : DashboardComponent,
    children : [
      { path: '', component:  DashboardDefaultComponent},
      { path: 'analytics', component:  DashboardAnalyticsComponent},
      { path: 'financials', component:  DashboardFinancialsComponent},
      { path: 'ecommerce', component:  DashboardEcommerceComponent},
    ]
  },
  { path: 'page-layout', component : PageLayoutComponent,
    children : [
      { path: 'blank-page', component:  PageLayoutBlankPageComponent},
      { path: 'one-column-wide', component:  PageLayoutOneColumnWideComponent},
      { path: 'one-column-boxed', component:  PageLayoutOneColumnBoxedComponent},
      { path: 'tabbed-header', component:  PageLayoutTabbedHeaderComponent},
      { path: 'left-sidebar', component:  PageLayoutLeftSidebarComponent},
      { path: 'right-sidebar', component:  PageLayoutRightSidebarComponent},
      { path: 'left-right-sidebar', component:  PageLayoutLeftAndrightSidebarsComponent},
    ]
  },
  { path: 'custom-pages', component : CustomPagesComponent,
    children : [
      { path: 'profile', component:  CustomPagesProfileComponent},
      { path: 'helpCenter', component:  CustomPagesHelpCenterComponent},
      { path: 'search', component:  CustomPagesSearchComponent},
      { path: 'pricingTables', component:  CustomPagesPricingTablesComponent},
      { path: 'myaccount', component:  CustomPagesMyAccountComponent},
      { path: 'invoicetemplate', component:  CustomPagesInvoiceTemplateComponent},
    ]
  },
  { path: 'cards', component : CardsComponent,
    children : [
      { path: 'contentTypes', component:  CardsContentTypesComponent},
      { path: 'layouts', component:  CardsLayoutsComponent},
      { path: 'navigation', component:  CardsNavigationComponent},
      { path: 'action', component:  CardsActionComponent},
    ]
  },
  { path: 'ui-kit', component : UiKitComponent,
    children : [
      { path: 'alerts', component:  UiAlertsComponent},
      { path: 'badges', component:  UiBadgesComponent},
      { path: 'buttons', component:  UiButtonsComponent},
      { path: 'colors', component:  UiColorsComponent},
      { path: 'icons', component:  UiIconsComponent},
      { path: 'listGroups', component:  UiListGroupsComponent},
      { path: 'preloaders', component:  UiPreLoadersComponent},
      { path: 'progressBars', component:  UiProgressBarsComponent},
      { path: 'typography', component:  UiTypographyComponent},
    ]
  },
  { path: 'components', component : ComponentComponent,
    children : [
      { path: 'carousels', component:  ComponentCarouselsComponent},
      { path: 'dropdowns', component:  ComponentDropdownsComponent},
      { path: 'modals', component:  ComponentModalsComponent},
      { path: 'scrollable', component:  ComponentScrollableComponent},
      { path: 'sweetalert', component:  ComponentSweetalertComponent},
      { path: 'tabpills', component:  ComponentTabsPillsComponent},
      { path: 'tooltip-popovers', component:  ComponentTooltipPopoversComponent},
      { path: 'uiblocking', component:  ComponentUiblockingComponent},
    ]
  },
  { path: 'charts', component : ChartsComponent,
    children : [
      { path: 'c3-charts', component:  ChartsC3ChartsComponent},
      { path: 'chartjs', component:  ChartsChartJsComponent},
      { path: 'chartist', component:  ChartsChartistComponent},
      { path: 'morris', component:  ChartsMorrisComponent},
    ]
  },
  { path: 'forms', component : FormsComponent,
    children : [
      { path: 'basic-elements', component:  BasicElementComponent,
        children: [
          {path: 'basic-inputs', component:  FormsBasicInputsComponent},
          {path: 'checkbox-radio', component:  FormsCheckboxRadioComponent},
          {path: 'inputGroups', component:  FormsInputGroupsComponent},
        ]
      },
      { path: 'form-layouts', component:  LayoutsComponent,
        children: [
          {path: 'formGroups', component:  FormFormGroupsComponent},
          {path: 'formGrid', component:  FormFormGridComponent},
        ]
      },
      { path: 'advanced-elements', component:  AdvancedElementComponent,
        children: [
          {path: 'inputMask', component:  FormInputMaskComponent},
          {path: 'select2', component:  FormSelect2Component},
          {path: 'range-sliders', component:  FormRangeSlidersComponent},
          {path: 'switches', component:  FormSwitchesComponent},
          {path: 'datePickers', component:  FormDatePickersComponent},
          {path: 'dropzone', component:  FormDropZoneComponent},
        ]
      },
      { path: 'form-validation', component:  ValidationComponent,
        children: [
          {path: 'basicValidation', component:  FormBasicVailidationComponent},
          {path: 'jqueryValidation', component:  FormJqueryVailidationComponent},
        ]
      },
      { path: 'form-wizards', component:  WizardComponent,
        children: [
          {path: 'verticalWizard', component:  FormVerticalWizardComponent},
          {path: 'horizontalWizard', component:  FormHorizontalWizardComponent},
        ]
      },
    ]
  },
  { path: 'tables', component : TablesComponent,
    children : [
      { path: 'basic-tables', component:  TablesBasicTablesComponent},
      { path: 'data-tables', component:  TablesDataTablesComponent}
    ]
  },
  { path: 'mail', component: MailComponent},
  { path: 'message', component: MessagesComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'helper-cases', component: HelperCasesComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
