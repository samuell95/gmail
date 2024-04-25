import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable,PressableProps, Text, View } from 'react-native';

import clsx from 'clsx';

export type IconNameProps = keyof typeof MaterialIcons.glyphMap

type DrawerButtonProps = PressableProps & {
  title: string
  isFocused?: boolean 
  isDivider?: boolean
  iconName: IconNameProps
  notifications?: number
}

export function DrawerButton({...rest}: DrawerButtonProps ) {
  return (
    <Pressable 
      className={clsx("py-2 w-full", {
        "border-b ml-10 border-gray-500": rest.isDivider
      })}
      {...rest}
    >
      <View className={clsx("flex-row items-center gap-4 h-14 px-6  w-full", {
        "-ml-14": rest.isDivider,
        "bg-orange-800 rounded-r-full": rest.isFocused
      })}>
        <MaterialIcons name={rest.iconName} size={20} color={rest.isFocused ? colors.orange[300] : colors.gray[400]}/>
        <Text className={clsx("text-white font-subtitle text-base flex-1", {
          "text-orange-300" : rest.isFocused
        })}>{rest.title}</Text>

        <Text className={clsx("text-gray-400 text-sm font-body", {
          "text-orange-300": rest.isFocused
        })}>{rest.notifications}</Text>
      </View>
    </Pressable>
  )
}