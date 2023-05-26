import { Keyframe } from 'react-native-reanimated';

import { Container } from './styles';

export function SidebarTest() {
  const outKeyFrame = new Keyframe({
    from: {
      opacity: 1,
      transform: [{ translateX: 0 }],
    },
    to: {
      opacity: 0.2,
      transform: [{ translateX: -200 }],
    },
  });

  const inKeyFrame = new Keyframe({
    from: {
      transform: [{ translateX: -100 }],
    },
    to: {
      transform: [{ translateX: 0 }],
    },
  });

  return <Container entering={inKeyFrame.duration(210)} exiting={outKeyFrame.duration(210)} />;
}
