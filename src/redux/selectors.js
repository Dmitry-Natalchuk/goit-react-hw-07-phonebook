export const getItems = ({ contacts }) => contacts.items;
export const getState = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});
export const getFilter = state => state.filters;
