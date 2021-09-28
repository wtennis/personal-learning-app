import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const emojis = [
  '📁',
  '🔗',
  '🔥',
  '🏆',
  '🌈',
  '🍩',
  '🍷',
  '🚕',
  '💋',
  '🌎',"🚗","🏎","🚨", "🚁","🚀","🎢","⛺️",
  '🌼',"🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐥","🐝","🐛","🦋","🐌",
  "⚽️", "🏀", "🏈", "⚾️", "🎾", "🏐", "🏉", "🎱", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🍍", "🥝", "🥑", "🍅", "🍆", "🥒", "🥕", "🌽", "🌶", "🥔"
];

// function getStyles(emoji, emoji, theme) {
//   return {
//     fontWeight:
//       emoji.indexOf(emoji) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function EmojiSelect({ emoji, setEmoji }) {
  const theme = useTheme();

  return (
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-emoji-label">emoji</InputLabel>
        <Select
          id="emoji-select"
          value={emoji}
          onChange={(e)=>setEmoji(e.target.value)}
          input={<OutlinedInput label="emoji" />}
          MenuProps={MenuProps}
        >
          {emojis.map((emoji) => (
            <MenuItem
              key={emoji}
              value={emoji}
            >
              {emoji}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}