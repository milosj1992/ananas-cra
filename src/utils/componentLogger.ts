import React, { ComponentType } from "react";

const withLogger = <P extends object>(
  WrappedComponent: ComponentType<P>,
  propsmessage: string
) => {
  const componentName =
    WrappedComponent.displayName || WrappedComponent.name || "Unknown";

  const ComponentWithLogger: React.FC<P> = (props) => {
    console.log(`${propsmessage} ${componentName}`);
    return React.createElement(WrappedComponent, props);
  };

  ComponentWithLogger.displayName = `withLogger(${componentName})`;

  return ComponentWithLogger;
};

export default withLogger;
