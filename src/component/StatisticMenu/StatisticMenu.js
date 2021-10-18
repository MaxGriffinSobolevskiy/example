import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './StatisticMenu.module.css';
import { ReactComponent as Arrow } from './left-arrow.svg'; 

moment.locale('ru');

const StatisticMenu = ({
  monthChanger,
  
  backMonthHandler,
  nextMonthHandler,
 
}) => {
  const history = useHistory();
//   const location = useLocation();

//   const isStatistics = location.pathname.split('/')[1] === 'statistics';

  
  return (
    <div className={styles.wrap}>
      (
        <button
          className={styles.arrowBtn}
          type="button"
        //   onClick={handleClickBack}
        >
          <Arrow className={styles.arrowSvg} />
          <p className={styles.backText}>Вернуться на главную</p>
          <p className={styles.backTextTabl}>На главную</p>
        </button>

      <div className={styles.calendarWrap}>
        <p className={styles.calendarText}>Текущий период :</p>
        <div className={styles.switchWrap}>
          <button
            type="button"
            className={styles.calendarBtn
            //   backMonthHandler ? styles.calendarBtnDisabled : styles.calendarBtn
            }
            // onClick={monthChangeHandler}
            name="leftBtn"
            // disabled={backMonthHandler}
          >
            &#8249;
          </button>
          <p className={styles.cldrMonth}>{moment().format('MMMM YYYY')}</p>
          <button
            type="button"
            className={ styles.calendarBtn
            //   nextMonthHandler ? styles.calendarBtnDisabled : styles.calendarBtn
            }
            // onClick={monthChangeHandler}
            name="rightBtn"
            // disabled={nextMonthHandler}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

StatisticMenu.propTypes = {
  monthChanger: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  backMonthHandler: PropTypes.bool.isRequired,
  nextMonthHandler: PropTypes.bool.isRequired,
};

export default StatisticMenu;