
export const Success = () => {
  return (
    <div className="success-alert alert-boxes">
      <span className="alert-description">
        <h4>Success: </h4>
         Your city has been added!
      </span>
    </div>
  );
};

export const Error = () => {
  return (
    <div className="error-alert alert-boxes">
      <span className="alert-description">
        <h4>Error: </h4>
         Input field is empty
      </span>
    </div>
  );
};
