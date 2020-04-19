import React from "react"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import styled from "styled-components"
import moment from "moment"
import "moment/locale/es"

moment.locale("es")
const hoy = moment()
console.log(hoy.format("dddd Do MMMM YYYY"))

const StyledDatePickerWrapper = styled.div`
  & .SingleDatePicker,
  .SingleDatePickerInput {
    .DateInput {
      height: 44px;
      display: flex;

      .DateInput_input {
        font-size: 1rem;
        border-bottom: 0;
        background: #2f4c4a;
        color: white;
        font-weight: 400;
        padding-left: 22px;
        text-transform: capitalize;
      }
    }

    .SingleDatePickerInput__withBorder {
      border-radius: 4px;
      overflow: hidden;
      border-color: #64ab3d;

      .DateInput_input__focused {
        background: #0e1716;
      }

      .CalendarMonth_caption {
        text-transform: capitalize;
      }

      .CalendarDay__selected {
        background: #64ab3d;
      }
    }
  }
`

export default class DatePicker extends React.Component {
  state = {
    focused: false,
    date: moment(),
  }
  render() {
    return (
      <StyledDatePickerWrapper>
        <SingleDatePicker
          block
          hideKeyboardShortcutsPanel = "false"
          displayFormat="dddd Do MMMM"
          numberOfMonths={1}
          onDateChange={date => this.setState({ date })}
          onFocusChange={({ focused }) => this.setState({ focused })}
          focused={this.state.focused}
          date={this.state.date}
        />
      </StyledDatePickerWrapper>
    )
  }
}
