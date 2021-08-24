//扩展router item的类型
import { RouteRecordRaw } from "vue-router";
interface extentItem {
  hidden?: boolean,
  alwaysShow?: boolean
  code?: number
}
declare type routerItem = RouteRecordRaw & extentItem

