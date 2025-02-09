import { useEffect } from 'react';

import useInternalContext from './internal/useInternalContext';

export default function useObserveScrollPosition(observer, deps = []) {
  if (observer && typeof observer !== 'function') {
    console.error(
      'react-scroll-to-bottom-updated: First argument passed to "useObserveScrollPosition" must be a function.'
    );
  } else if (!Array.isArray(deps)) {
    console.error(
      'react-scroll-to-bottom-updated: Second argument passed to "useObserveScrollPosition" must be an array if specified.'
    );
  }

  const { observeScrollPosition } = useInternalContext();

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  useEffect(() => observer && observeScrollPosition(observer), [...deps, !observer, observeScrollPosition]);
}
