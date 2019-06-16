import React from "react";

export default (props) => WrappedComponent => () => <WrappedComponent {...props} />;
