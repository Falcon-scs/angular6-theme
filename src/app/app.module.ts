import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarLeftComponent } from './layouts/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './layouts/sidebar-right/sidebar-right.component';
import { TopToolbarComponent } from './layouts/top-toolbar/top-toolbar.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { LockScreenComponent } from './pages/auth/lock-screen/lock-screen.component';
import { DashboardDefaultComponent } from './pages/dashboard/dashboard-default/dashboard-default.component';
import { DashboardAnalyticsComponent } from './pages/dashboard/dashboard-analytics/dashboard-analytics.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { DashboardFinancialsComponent } from './pages/dashboard/dashboard-financials/dashboard-financials.component';
import { DashboardEcommerceComponent } from './pages/dashboard/dashboard-ecommerce/dashboard-ecommerce.component';
import { PageLayoutBlankPageComponent } from './pages/page-layouts/page-layout-blank-page/page-layout-blank-page.component';
import { PageLayoutOneColumnWideComponent } from './pages/page-layouts/page-layout-one-column-wide/page-layout-one-column-wide.component';
import { PageLayoutOneColumnBoxedComponent } from './pages/page-layouts/page-layout-one-column-boxed/page-layout-one-column-boxed.component';
import { PageLayoutTabbedHeaderComponent } from './pages/page-layouts/page-layout-tabbed-header/page-layout-tabbed-header.component';
import { PageLayoutLeftSidebarComponent } from './pages/page-layouts/page-layout-left-sidebar/page-layout-left-sidebar.component';
import { PageLayoutRightSidebarComponent } from './pages/page-layouts/page-layout-right-sidebar/page-layout-right-sidebar.component';
import { PageLayoutLeftAndrightSidebarsComponent } from './pages/page-layouts/page-layout-left-andright-sidebars/page-layout-left-andright-sidebars.component';
import { PageLayoutComponent } from './pages/page-layouts/page-layout/page-layout.component';
import { CustomPagesProfileComponent } from './pages/custom-pages/custom-pages-profile/custom-pages-profile.component';
import { CustomPagesComponent } from './pages/custom-pages/custom-pages/custom-pages.component';
import { CustomPagesHelpCenterComponent } from './pages/custom-pages/custom-pages-help-center/custom-pages-help-center.component';
import { CustomPagesSearchComponent } from './pages/custom-pages/custom-pages-search/custom-pages-search.component';
import { CustomPagesPricingTablesComponent } from './pages/custom-pages/custom-pages-pricing-tables/custom-pages-pricing-tables.component';
import { CustomPagesMyAccountComponent } from './pages/custom-pages/custom-pages-my-account/custom-pages-my-account.component';
import { CustomPagesInvoiceTemplateComponent } from './pages/custom-pages/custom-pages-invoice-template/custom-pages-invoice-template.component';
import { CardsContentTypesComponent } from './pages/cards/cards-content-types/cards-content-types.component';
import { CardsLayoutsComponent } from './pages/cards/cards-layouts/cards-layouts.component';
import { CardsComponent } from './pages/cards/cards/cards.component';
import { CardsNavigationComponent } from './pages/cards/cards-navigation/cards-navigation.component';
import { CardsActionComponent } from './pages/cards/cards-action/cards-action.component';
import { UiAlertsComponent } from './pages/ui-kit/ui-alerts/ui-alerts.component';
import { UiBadgesComponent } from './pages/ui-kit/ui-badges/ui-badges.component';
import { UiButtonsComponent } from './pages/ui-kit/ui-buttons/ui-buttons.component';
import { UiColorsComponent } from './pages/ui-kit/ui-colors/ui-colors.component';
import { UiIconsComponent } from './pages/ui-kit/ui-icons/ui-icons.component';
import { UiListGroupsComponent } from './pages/ui-kit/ui-list-groups/ui-list-groups.component';
import { UiProgressBarsComponent } from './pages/ui-kit/ui-progress-bars/ui-progress-bars.component';
import { UiPreLoadersComponent } from './pages/ui-kit/ui-pre-loaders/ui-pre-loaders.component';
import { UiTypographyComponent } from './pages/ui-kit/ui-typography/ui-typography.component';
import { UiKitComponent } from './pages/ui-kit/ui-kit/ui-kit.component';
import { ComponentCarouselsComponent } from './pages/components/component-carousels/component-carousels.component';
import { ComponentTabsPillsComponent } from './pages/components/component-tabs-pills/component-tabs-pills.component';
import { ComponentDropdownsComponent } from './pages/components/component-dropdowns/component-dropdowns.component';
import { ComponentModalsComponent } from './pages/components/component-modals/component-modals.component';
import { ComponentSweetalertComponent } from './pages/components/component-sweetalert/component-sweetalert.component';
import { ComponentScrollableComponent } from './pages/components/component-scrollable/component-scrollable.component';
import { ComponentTooltipPopoversComponent } from './pages/components/component-tooltip-popovers/component-tooltip-popovers.component';
import { ComponentUiblockingComponent } from './pages/components/component-uiblocking/component-uiblocking.component';
import { ComponentComponent } from './pages/components/component/component.component';
import { ChartsComponent } from './pages/charts/charts/charts.component';
import { ChartsChartJsComponent } from './pages/charts/charts-chart-js/charts-chart-js.component';
import { ChartsC3ChartsComponent } from './pages/charts/charts-c3-charts/charts-c3-charts.component';
import { ChartsMorrisComponent } from './pages/charts/charts-morris/charts-morris.component';
import { ChartsChartistComponent } from './pages/charts/charts-chartist/charts-chartist.component';
import { FormsBasicInputsComponent } from './pages/forms/basic-elements/forms-basic-inputs/forms-basic-inputs.component';
import { FormsCheckboxRadioComponent } from './pages/forms/basic-elements/forms-checkbox-radio/forms-checkbox-radio.component';
import { FormsInputGroupsComponent } from './pages/forms/basic-elements/forms-input-groups/forms-input-groups.component';
import { FormFormGroupsComponent } from './pages/forms/layouts/form-form-groups/form-form-groups.component';
import { FormFormGridComponent } from './pages/forms/layouts/form-form-grid/form-form-grid.component';
import { FormInputMaskComponent } from './pages/forms/advanced-elements/form-input-mask/form-input-mask.component';
import { FormSelect2Component } from './pages/forms/advanced-elements/form-select2/form-select2.component';
import { FormRangeSlidersComponent } from './pages/forms/advanced-elements/form-range-sliders/form-range-sliders.component';
import { FormSwitchesComponent } from './pages/forms/advanced-elements/form-switches/form-switches.component';
import { FormDatePickersComponent } from './pages/forms/advanced-elements/form-date-pickers/form-date-pickers.component';
import { FormDropZoneComponent } from './pages/forms/advanced-elements/form-drop-zone/form-drop-zone.component';
import { FormBasicVailidationComponent } from './pages/forms/validation/form-basic-vailidation/form-basic-vailidation.component';
import { FormJqueryVailidationComponent } from './pages/forms/validation/form-jquery-vailidation/form-jquery-vailidation.component';
import { FormVerticalWizardComponent } from './pages/forms/wizards/form-vertical-wizard/form-vertical-wizard.component';
import { FormHorizontalWizardComponent } from './pages/forms/wizards/form-horizontal-wizard/form-horizontal-wizard.component';
import { TablesBasicTablesComponent } from './pages/tables/tables-basic-tables/tables-basic-tables.component';
import { TablesDataTablesComponent } from './pages/tables/tables-data-tables/tables-data-tables.component';
import { FormsComponent } from './pages/forms/forms/forms.component';
import { AdvancedElementComponent } from './pages/forms/advanced-elements/advanced-element/advanced-element.component';
import { BasicElementComponent } from './pages/forms/basic-elements/basic-element/basic-element.component';
import { LayoutsComponent } from './pages/forms/layouts/layouts/layouts.component';
import { ValidationComponent } from './pages/forms/validation/validation/validation.component';
import { WizardComponent } from './pages/forms/wizards/wizard/wizard.component';
import { TablesComponent } from './pages/tables/tables/tables.component';
import { MailComponent } from './pages/mail/mail.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HelperCasesComponent } from './pages/helper-cases/helper-cases.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    TopToolbarComponent,
    SignupComponent,
    SigninComponent,
    ForgotPasswordComponent,
    LockScreenComponent,
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    DashboardComponent,
    DashboardFinancialsComponent,
    DashboardEcommerceComponent,
    PageLayoutBlankPageComponent,
    PageLayoutOneColumnWideComponent,
    PageLayoutOneColumnBoxedComponent,
    PageLayoutTabbedHeaderComponent,
    PageLayoutLeftSidebarComponent,
    PageLayoutRightSidebarComponent,
    PageLayoutLeftAndrightSidebarsComponent,
    PageLayoutComponent,
    CustomPagesProfileComponent,
    CustomPagesComponent,
    CustomPagesHelpCenterComponent,
    CustomPagesSearchComponent,
    CustomPagesPricingTablesComponent,
    CustomPagesMyAccountComponent,
    CustomPagesInvoiceTemplateComponent,
    CardsContentTypesComponent,
    CardsLayoutsComponent,
    CardsComponent,
    CardsNavigationComponent,
    CardsActionComponent,
    UiAlertsComponent,
    UiBadgesComponent,
    UiButtonsComponent,
    UiColorsComponent,
    UiIconsComponent,
    UiListGroupsComponent,
    UiProgressBarsComponent,
    UiPreLoadersComponent,
    UiTypographyComponent,
    UiKitComponent,
    ComponentCarouselsComponent,
    ComponentTabsPillsComponent,
    ComponentDropdownsComponent,
    ComponentModalsComponent,
    ComponentSweetalertComponent,
    ComponentScrollableComponent,
    ComponentTooltipPopoversComponent,
    ComponentUiblockingComponent,
    ComponentComponent,
    ChartsComponent,
    ChartsChartJsComponent,
    ChartsC3ChartsComponent,
    ChartsMorrisComponent,
    ChartsChartistComponent,
    FormsBasicInputsComponent,
    FormsCheckboxRadioComponent,
    FormsInputGroupsComponent,
    FormFormGroupsComponent,
    FormFormGridComponent,
    FormInputMaskComponent,
    FormSelect2Component,
    FormRangeSlidersComponent,
    FormSwitchesComponent,
    FormDatePickersComponent,
    FormDropZoneComponent,
    FormBasicVailidationComponent,
    FormJqueryVailidationComponent,
    FormVerticalWizardComponent,
    FormHorizontalWizardComponent,
    TablesBasicTablesComponent,
    TablesDataTablesComponent,
    FormsComponent,
    AdvancedElementComponent,
    BasicElementComponent,
    LayoutsComponent,
    ValidationComponent,
    WizardComponent,
    TablesComponent,
    MailComponent,
    MessagesComponent,
    ContactsComponent,
    CalendarComponent,
    HelperCasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
