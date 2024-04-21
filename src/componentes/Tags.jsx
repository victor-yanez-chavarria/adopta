import Button from 'react-bootstrap/Button';

function Tags({ raza, color }) {
  return (
    <div className="d-grid mt-auto">
      <Button href="#" variant={color} size="sm">
        {raza}
      </Button>
    </div>

  );
}

export default Tags;