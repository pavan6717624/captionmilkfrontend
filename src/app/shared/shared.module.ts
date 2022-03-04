import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzDrawerModule } from 'ng-zorro-antd/drawer';
// import { NzFormModule } from 'ng-zorro-antd/form';
// import { NzInputModule } from 'ng-zorro-antd/input';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzSelectModule } from 'ng-zorro-antd/select';
// import { NzMessageModule } from 'ng-zorro-antd/message';
// import { NzAffixModule } from 'ng-zorro-antd/affix';
// import { NzResultModule } from 'ng-zorro-antd/result';
// import { NzSpinModule } from 'ng-zorro-antd/spin';
// import { NzSwitchModule } from 'ng-zorro-antd/switch';
// import { NzTreeModule } from 'ng-zorro-antd/tree';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { NzTabsModule } from 'ng-zorro-antd/tabs';
// import { NzModalModule } from 'ng-zorro-antd/modal';
// import { NzUploadModule } from 'ng-zorro-antd/upload';
// import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
// import { NzSpaceModule } from 'ng-zorro-antd/space';
// import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
// import { NzTableModule } from 'ng-zorro-antd/table';
// import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
// import { NzImageModule } from 'ng-zorro-antd/image';
// import { NzNotificationModule } from 'ng-zorro-antd/notification';
// import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
// import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
// import {FormsModule} from '@angular/forms';
// import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzProgressModule } from 'ng-zorro-antd/progress';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { FormsModule } from '@angular/forms';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

const NG_ZORRO_SHARED_MODULES = [
  NzTimePickerModule,
  NzProgressModule,
  NzAlertModule,
  NzAvatarModule,
  NzAffixModule,
  NzBadgeModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzCardModule,
  NzCheckboxModule,
  NzCollapseModule,
  NzCommentModule,
  NzDatePickerModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzDrawerModule,
  NzDropDownModule,
  NzCalendarModule,
  NzEmptyModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzInputNumberModule,
  NzLayoutModule,
  NzListModule,
  NzModalModule,
  NzMenuModule,
  NzMessageModule,
  NzNotificationModule,
  NzPageHeaderModule,
  NzPaginationModule,
  NzPopoverModule,
  NzRadioModule,
  NzResultModule,
  NzSelectModule,
  NzSpaceModule,
  NzSpinModule,
  NzStatisticModule,
  NzStepsModule,
  NzSwitchModule,
  NzTabsModule,
  NzTableModule,
  NzTagModule,
  NzToolTipModule,
  NzTransferModule,
  NzTypographyModule,
  NzUploadModule,
  NzPopconfirmModule,
  FormsModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NG_ZORRO_SHARED_MODULES
  ],

  exports:     [
  
    NG_ZORRO_SHARED_MODULES,
  ],


})
export class SharedModule { }
