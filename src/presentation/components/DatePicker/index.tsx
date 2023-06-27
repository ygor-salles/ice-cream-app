import React, { useCallback, useMemo, useState } from 'react';
import { Calendar, DateData } from 'react-native-calendars';

import { Feather } from '@expo/vector-icons';
import { Portal } from '@gorhom/portal';
import { format } from 'date-fns';

import { useThemeContext } from '~hooks/useThemeContext';
import { colors, globalKeyFrames } from '~styles/constants';

import { ArrowsCalendar } from './components/ArrowsCalendar';
import { HeaderCalendar } from './components/HeaderCalendar';
import { SelectedDateField } from './components/SelectedDateField';
import {
  customIntervalDates,
  customMarkedDate,
  customMarkedDates,
  themeCalendarLight,
  themeCalendarDark,
  today,
  verifyTwoDates,
} from './constants';
import {
  LayoutCalendar,
  DividerHeader,
  WrapperCalendar,
  SelectedDateWrapper,
  SButton,
  Header,
  Title,
  HiddenIcon,
  styles,
} from './styles';
import { DatePickerProps } from './types';

const title = 'CALENDÁRIO';

export function DatePicker({
  show,
  onDimiss,
  labelInit,
  labelFinal,
  onChangeInit,
  onChangeFinal,
  onChangeNextEvent,
  minDate,
  maxDate,
  monthFormat,
  hideArrows,
  disableMonthChange,
  hideDayNames,
  disableArrowLeft,
  disableArrowRight,
  disableAllTouchEventsForDisabledDays,
  callbackOnpressArrowLeft,
  callbackOnpressArrowRight,
}: DatePickerProps) {
  const { themeName } = useThemeContext();

  const hasTwoInput = !!(onChangeFinal && labelFinal);

  const [selectedInicitalDateSate, setSelectInicitalDateSate] = useState({
    selected: false,
    date: undefined,
  });
  const [selectedFinalDateSate, setSelectFinalDateSate] = useState({
    selected: false,
    date: undefined,
  });
  const [selectedMonthState, setSelectedMonthState] = useState(today);

  const getDaysArray = useCallback((start, end) => {
    // eslint-disable-next-line vars-on-top, no-var
    for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt).toISOString().split('T')[0]);
    }

    // eslint-disable-next-line block-scoped-var
    return arr;
  }, []);

  const verifyDate = useMemo(() => verifyTwoDates(selectedMonthState), [selectedMonthState]);

  const selectedPeriodDate = useMemo(
    () =>
      getDaysArray(
        selectedInicitalDateSate?.date?.dateString,
        selectedFinalDateSate?.date?.dateString,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedInicitalDateSate, selectedFinalDateSate],
  );

  const intervalDates = useMemo(
    () => customIntervalDates(selectedPeriodDate),
    [selectedPeriodDate],
  );

  const markedDates = useMemo(
    () =>
      customMarkedDates(intervalDates, selectedInicitalDateSate, selectedFinalDateSate, themeName),
    [intervalDates, selectedInicitalDateSate, selectedFinalDateSate, themeName],
  );

  const markedDate = useMemo(
    () => customMarkedDate(selectedInicitalDateSate, themeName),
    [selectedInicitalDateSate, themeName],
  );

  const onOneDayPress = (day: DateData) =>
    setSelectInicitalDateSate({
      selected: true,
      date: day,
    });

  const onTwoDayPress = (day: DateData) => {
    if (!selectedInicitalDateSate.selected && !selectedFinalDateSate.selected) {
      setSelectInicitalDateSate({
        selected: true,
        date: day,
      });
    }

    if (
      !selectedFinalDateSate.selected &&
      selectedInicitalDateSate.selected &&
      day.dateString > selectedInicitalDateSate.date?.dateString
    ) {
      setSelectFinalDateSate({
        selected: true,
        date: day,
      });
    }

    if (selectedInicitalDateSate.selected && selectedFinalDateSate.selected) {
      (() => {
        setSelectInicitalDateSate({
          selected: true,
          date: day,
        });

        setSelectFinalDateSate({
          selected: false,
          date: undefined,
        });
      })();
    }
  };

  const clearDateFirstInput = !selectedFinalDateSate.selected
    ? () => {
        onChangeInit(null);
        setSelectInicitalDateSate({ selected: false, date: undefined });
      }
    : undefined;

  const clearDateSecondInput = () => {
    onChangeFinal(null);
    setSelectFinalDateSate({ selected: false, date: undefined });
  };

  const onPressSubmit = () => {
    onChangeInit(selectedInicitalDateSate?.date);

    if (hasTwoInput) {
      onChangeFinal(selectedFinalDateSate?.date);
    }

    if (onChangeNextEvent) onChangeNextEvent();

    if (selectedInicitalDateSate?.date) onDimiss();
  };

  if (!show) return null;

  return (
    <Portal name={title}>
      <LayoutCalendar
        themeName={themeName}
        entering={globalKeyFrames.ENTER_TOP}
        exiting={globalKeyFrames.EXIT_BOTTOM}
      >
        <Header>
          <Feather
            name="x"
            size={24}
            color={themeName === 'light' ? colors.GRAY_500 : colors.WHITE}
            onPress={onDimiss}
          />
          <Title>{title}</Title>
          <HiddenIcon />
        </Header>
        <SelectedDateWrapper>
          <SelectedDateField
            label={labelInit}
            isFocus={selectedInicitalDateSate.selected}
            date={selectedInicitalDateSate.date}
            themeName={themeName}
            clearDate={clearDateFirstInput}
            hasTwoInput={hasTwoInput}
          />
          {hasTwoInput ? (
            <SelectedDateField
              label={labelFinal}
              isFocus={!selectedInicitalDateSate.selected}
              date={selectedFinalDateSate.date}
              themeName={themeName}
              clearDate={clearDateSecondInput}
            />
          ) : null}
        </SelectedDateWrapper>
        <WrapperCalendar>
          <DividerHeader />
          <Calendar
            firstDay={0}
            markingType="custom"
            hideExtraDays
            showWeekNumbers={false}
            enableSwipeMonths
            theme={themeName === 'dark' ? themeCalendarDark : themeCalendarLight}
            minDate={minDate && format(minDate, 'yyyy-MM-dd')}
            maxDate={maxDate && format(maxDate, 'yyyy-MM-dd')}
            markedDates={hasTwoInput ? markedDates : markedDate}
            hideArrows={hideArrows ?? hideArrows}
            monthFormat={monthFormat ?? monthFormat}
            hideDayNames={hideDayNames ?? hideDayNames}
            disableArrowRight={disableArrowRight ?? disableArrowRight}
            disableMonthChange={disableMonthChange ?? disableMonthChange}
            disableAllTouchEventsForDisabledDays={
              disableAllTouchEventsForDisabledDays ?? disableAllTouchEventsForDisabledDays
            }
            disableArrowLeft={disableArrowLeft || verifyDate}
            onPressArrowLeft={callbackOnpressArrowLeft ?? callbackOnpressArrowLeft}
            onPressArrowRight={callbackOnpressArrowRight ?? callbackOnpressArrowRight}
            onDayPress={hasTwoInput ? onTwoDayPress : onOneDayPress}
            onMonthChange={(month: { dateString: string }) => {
              setSelectedMonthState(month?.dateString);
            }}
            renderHeader={date => <HeaderCalendar date={date} themeName={themeName} />}
            renderArrow={direction => (
              <ArrowsCalendar direction={direction} verifyDate={verifyDate} themeName={themeName} />
            )}
            style={themeName === 'dark' ? styles.headCalendarDark : styles.headCalendarLight}
            headerStyle={themeName === 'dark' ? styles.headCalendarDark : styles.headCalendarLight}
          />
        </WrapperCalendar>
        {selectedInicitalDateSate.date && (
          <SButton
            disabled={!selectedInicitalDateSate?.date}
            themeName={themeName}
            onPress={onPressSubmit}
            styleText={{ color: themeName === 'dark' ? colors.WHITE : colors.PURPLE_PRIMARY }}
          >
            {!selectedFinalDateSate.selected && 'Selecionar data'}
            {selectedFinalDateSate.selected && 'Selecionar datas'}
          </SButton>
        )}
      </LayoutCalendar>
    </Portal>
  );
}
