export const handleApiError = (
  error: any,
  customMessage?: string
): { error: string } => {
  const errorMessage =
    error.response?.data?.errors ||
    error.response?.data?.error ||
    error.message ||
    customMessage ||
    "An error occurred";
  return { error: errorMessage };
};
