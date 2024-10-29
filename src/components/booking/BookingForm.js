import { addMonths } from "date-fns";
// must import locale from date-fns as below
// import { nb, dk } from "date-fns/locale";
//

import { forwardRef } from "react";

import { CiCalendar } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";

import React, { useState } from "react";
import "./bookingForm.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import customNbLocale from "../../utils/customNBLocale";

const CalendarInput = forwardRef(({ value, onClick, className }, ref) => (
  <button className={className} onClick={onClick} ref={ref}>
    <FaCalendarAlt />
    {value}
  </button>
));

function BookingForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // to set holidays in DatePicker use the holiday prop, setting directly/externaly an array of objects
  // with date: "UTC date" var and holidayName: "name of holiday".
  const holidays = [
    { date: "2024-12-24", holidayName: "Julaften" },
    { date: "2024-12-31", holidayName: "Nyttår" },
    { date: "2025-01-01", holidayName: "Første nyttårsdag" },
  ];

  return (
    <>
      <div className="datePicker">
        {/* <FaCalendarAlt /> */}
        <DatePicker
          customInput={<CalendarInput />}
          icon={<FaCalendarAlt />}
          dateFormat="dd/MM/yyyy"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={new Date()}
          //   isClearable={true}
          //   withPortal
          //   shouldCloseOnSelect={false}
          holidays={holidays}
          //   locale={nb}
          locale={customNbLocale}
          showPopperArrow={false}
        />
      </div>
    </>
  );
}

export default BookingForm;
