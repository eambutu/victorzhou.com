// @flow
import * as React from 'react';
import styles from './Content.module.scss';
import ContentDate from '../ContentDate';
import CarbonAd from '../CarbonAd';

type Props = {|
  +body: string,
  +title: string,
  +subtitle: ?string,
  +dateFormatted: string,
  +dateModifiedFormatted: ?string,
  +footer: ?React.Node,
|};

const Content = ({
  body,
  title,
  subtitle,
  dateFormatted,
  dateModifiedFormatted,
  footer,
}: Props) => (
  <article className={styles['content']}>
    <h1 className={`${styles['content__title']} ${subtitle ? '' : styles['no-subtitle']}`}>
      {title}
    </h1>
    {subtitle && <h2 className={styles['content__subtitle']}>{subtitle}</h2>}
    <div className={styles['content__date']}>
      <ContentDate dateFormatted={dateFormatted} dateModifiedFormatted={dateModifiedFormatted} />
    </div>
    <CarbonAd smallOnly />
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: body }} />
    {footer}
  </article>
);

export default Content;
