export function createImprovedAction(originalPublishAction: any) {
  const BetterAction = (props: any) => {
    const originalResult = originalPublishAction(props);
    return {
      ...originalResult,
      onHandle: () => {
        // Add our custom functionality
        console.log("Hello world!", originalResult, props.draft.gender);
        // then delegate to original handler
        originalResult.onHandle();
      },
    };
  };
  return BetterAction;
}
