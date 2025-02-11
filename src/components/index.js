/** ---------------------------
 * Class based components
 * (aka original)
 --------------------------- */

/** Still needs to be refactored into functional */
export { default as MTableBody } from './m-table-body';
export { default as MTableBodyRow } from './m-table-body-row';
/** HAVING ISSUES WITH THE REFACTORED VERSIONS OF: */
export { default as MTableEditField } from './m-table-edit-field';
export { default as MTableEditCell } from './m-table-edit-cell';

/** ---------------------------
 * Functional components
 * (aka refactor)
 --------------------------- */

// Trying to keep these in alphabetical order
export { default as MTableAction } from './MTableAction';
export { default as MTableActions } from './MTableActions';
export { default as MTableCell } from './MTableCell';
export { default as MTableEditRow } from './MTableEditRow';
export { default as MTableFilterRow } from './MTableFilterRow';
export { default as MTableGroupbar } from './MTableGroupbar';
export { default as MTableGroupRow } from './MTableGroupRow';
export { default as MTableHeader } from './MTableHeader';
export { default as MTableSteppedPagination } from './MTableSteppedPaginationInner';
export { default as MTablePagination } from './MTablePagination';
export { default as MTableToolbar } from './MTableToolbar';
/** THESE REFACTORS ARE HAVING ISSUES */
// export { default as MTableEditCell } from './MTableEditCell';
// export { default as MTableEditField } from './MTableEditField';
