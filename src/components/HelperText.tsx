export default function HelperText({ helperText }) {
  if (helperText === undefined) {
    return null;
  } else {
    return (
      <div>
        <p className="helper-text">{helperText}</p>
      </div>
    );
  }
}
