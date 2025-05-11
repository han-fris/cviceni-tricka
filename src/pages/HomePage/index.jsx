import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';
import { useState } from 'react';

export const HomePage = () => {
  const [type, setType] = useState('normalShortSleeve');
  const [color, setColor] = useState('yellow');
  const [print, setPrint] = useState('Ahoj světe');

  const handleChangeType = (type) => {
    setType(type);
  };
  const handleChangeColor = (color) => {
    setColor(color);
  };
  const handleChangePrint = (print) => {
    setPrint(print);
  };

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={type} color={color} print={print} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup
            type={type}
            color={color}
            print={print}
            onTypeChange={handleChangeType}
            onColorChange={handleChangeColor}
            onPrintChange={handleChangePrint}
          />
        </div>
      </div>
    </div>
  );
};
