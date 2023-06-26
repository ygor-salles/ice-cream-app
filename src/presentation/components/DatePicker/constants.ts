import { format, subMonths } from 'date-fns';

import { colors } from '~styles/constants';

import { IDates } from './types';

export const today = new Date().toISOString().split('T')[0];

export const themeCalendar = {
  textDayFontSize: 14,
  todayTextColor: colors.GRAY_500,
  'stylesheet.calendar.header': {
    dayHeader: {
      fontSize: 16,
      marginBottom: 16,
      color: colors.TEXT,
    },
    header: {
      flexDirection: 'row',
      marginBottom: 16,
      marginHorizontal: -4,
    },
  },
};

export const customMarkedDates = (
  intervalDates: { [key: string]: object },
  selectedInicitalDateSate: { date: IDates; selected: boolean },
  selectedFinalDateSate?: { date: IDates; selected: boolean },
) => ({
  ...intervalDates,
  [selectedInicitalDateSate?.date?.dateString]: {
    customStyles: {
      container: {
        backgroundColor: selectedFinalDateSate.selected ? colors.GRAY_300 : colors.WHITE,
        width: '100%',
        marginLeft: '50%',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      text: {
        color: colors.WHITE,
        fontWeight: 'bold',
        backgroundColor: colors.TEXT,
        paddingVertical: 6,
        paddingHorizontal: selectedInicitalDateSate?.date?.dateString[8] === '0' ? '24%' : '16%',
        marginTop: -0.2,
        borderRadius: 50,
        marginLeft: '-50%',
      },
    },
  },
  [selectedFinalDateSate?.date?.dateString]: {
    customStyles: {
      container: {
        backgroundColor: colors.GRAY_300,
        width: '100%',
        marginRight: '50%',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
      text: {
        color: colors.WHITE,
        fontWeight: 'bold',
        backgroundColor: colors.TEXT,
        paddingVertical: 6,
        paddingHorizontal: selectedFinalDateSate?.date?.dateString[8] === '0' ? '24%' : '16%',
        marginTop: -0.2,
        borderRadius: 50,
        marginRight: '-50%',
      },
    },
  },
});

export const customMarkedDate = (selectedInicitalDateSate: {
  date: IDates;
  selected: boolean;
}) => ({
  [selectedInicitalDateSate?.date?.dateString]: {
    customStyles: {
      container: {
        width: '100%',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      text: {
        color: colors.WHITE,
        fontWeight: 'bold',
        backgroundColor: colors.TEXT,
        paddingVertical: 6,
        paddingHorizontal: selectedInicitalDateSate?.date?.dateString[8] === '0' ? '24%' : '16%',
        marginTop: -0.2,
        borderRadius: 50,
      },
    },
  },
});

export const customIntervalDates = (selectedPeriodDate: string[]) =>
  selectedPeriodDate.reduce(
    (obj, item) =>
      Object.assign(obj, {
        [item]: {
          customStyles: {
            container: {
              backgroundColor: colors.GRAY_300,
              width: '102%',
              borderRadius: 0,
              paddingTop: 2,
            },
            text: {
              color: colors.GRAY_800,
            },
          },
        },
      }),
    {},
  );

export const verifyTwoDates = (selectedMonthState: string) => {
  // eslint-disable-next-line no-lone-blocks
  {
    let selectedDate: string | Date = subMonths(new Date(selectedMonthState), 1);
    selectedDate = format(selectedDate, 'yyyy-MM');
    const currentDate = format(new Date(), 'yyyy-MM');

    return currentDate > selectedDate;
  }
};
