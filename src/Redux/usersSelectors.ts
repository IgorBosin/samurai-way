import {AppRootStateType} from "Redux/store";

export const currentPageSelector = (state:AppRootStateType) => state.usersPage.currentPage
export const pageSizeSelector = (state:AppRootStateType) => state.usersPage.pageSize
export const totalCountSelector = (state:AppRootStateType) => state.usersPage.totalCount
export const usersListsSelector = (state:AppRootStateType) => state.usersPage.items
