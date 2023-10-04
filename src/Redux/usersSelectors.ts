import {AppRootStateType} from "Redux/store";
import {createSelector} from "reselect";

export const currentPageSelector = (state: AppRootStateType) => state.usersPage.currentPage
export const pageSizeSelector = (state: AppRootStateType) => state.usersPage.pageSize
export const totalCountSelector = (state: AppRootStateType) => state.usersPage.totalCount

const usersLists = (state: AppRootStateType) => state.usersPage.items
export const usersListsSelector = createSelector(usersLists, (users) => { // reselect library
    return users.filter(el => true)
})