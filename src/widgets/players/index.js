import { jsx as _jsx } from "react/jsx-runtime";
import style from './style.module.scss';
import { PlayerList } from '../player_list';
export const PlayerInfo = () => {
    return (_jsx("div", { className: style.container, children: _jsx("div", { className: style.players, children: _jsx(PlayerList, {}) }) }));
};
