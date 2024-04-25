import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
}

export function FloatButton({icon, ...rest}: FloatButtonProps) {

  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      className='px-4 py-3 bg-gray-600 rounded-full absolute bottom-4 right-4 gap-1 flex-row items-center'
      {...rest}
    >
     {
      icon && ( 
        <MaterialIcons name={icon} size={22} color={colors.orange[500]}/>
      )
     }
      <Text className='font-subtitle text-orange-500'>Escrever</Text>
    </TouchableOpacity>
  );
}