import React from 'react';

interface TimePickerProps {
  label: string;
  name: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ label, name }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <div className="flex space-x-2">
        <select name={`${name}-hours`} id={name} className="border rounded-lg p-2">
          {hours.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>
        <span>:</span>
        <select id={name} name={`${name}-minutes`} className="border rounded-lg p-2">
          {minutes.map((minute) => (
            <option key={minute} value={minute}>
              {minute}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TimePicker;
