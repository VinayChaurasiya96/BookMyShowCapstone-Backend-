import React from "react";

// this component rendering selected slot section
const SelectSlot = ({slots, selectedSlot, setSelectedSlot}) => {
  return (
    <div className="slot-row">
      <h3>Select a Time Slot</h3>
      {slots.map((slot, i) => (
        <div
          key={i}
          className={`slot-column ${
            slot == selectedSlot ? "slot-column-selected" : ""
          }`}
          onClick={() => setSelectedSlot(slot)}
        >
          {slot}
        </div>
      ))}
    </div>
  );
};

export default SelectSlot;
