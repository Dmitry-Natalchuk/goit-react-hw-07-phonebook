export const selectItems = ({ contacts }) => contacts.items;
export const selectState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});
export const selectFilter = state => state.filters;
