import request from '../../utils/request';
import qs from 'qs'
import axios2 from '../../utils/resquest2';
import { dev_Url } from '../../utils/port'

const DemoJson = [{ "sm_type": "words", "smaterial_id": "4245633", "css_width": "166", "css_height": "20", "css_margin_top": "104", "css_margin_left": "125", "css_background_color": "rgba(255,255,255,0)", "css_border_width": "0", "css_border_style": "solid", "css_border_position": "border", "css_border_color": "black", "css_border_radius": "0", "css_box_shadow_h": "0", "css_box_shadow_v": "0", "css_box_shadow_blur": "0", "css_box_shadow_spread": "0", "css_box_shadow_color": "black", "css_box_shadow_inset": "", "css_rotate": "0", "css_z_index": "2", "css_opacity": "1", "an_use": "0", "an_text": "0%{opacity:0;}100%{opacity:1;}", "an_duration": "2", "an_timing_function": "ease", "an_delay": "0", "an_iteration_count": "1", "an_use_1": "0", "an_text_1": "0%{opacity:0;}100%{opacity:1;}", "an_duration_1": "2", "an_timing_function_1": "ease", "an_delay_1": "0", "an_iteration_count_1": "1", "sm_link": "", "click_an_start_smid": "", "click_an_start_state": "0", "play_music": "0", "music_name": "", "mu_o_url": "", "music_loop": "0", "st_words": "123123", "st_words_line_height": "normal", "st_words_animation_type": "0", "st_words_animation_delay": "0", "st_words_color": "#808080", "st_words_shadow_color": "", "st_words_font": "", "st_words_size": "15", "st_words_bold": "0", "st_words_italic": "0", "st_words_spacing": "0", "st_words_align": "0", "sm_father_id": "0", "can_edit": "0", "auto_bili": "0", "st_video_mp4_url": "" }, { "sm_type": "timedown", "smaterial_id": "4245634", "css_width": "332", "css_height": "60", "css_margin_top": "163", "css_margin_left": "37", "css_background_color": "#000000", "css_border_width": "0", "css_border_style": "solid", "css_border_position": "border", "css_border_color": "black", "css_border_radius": "0", "css_box_shadow_h": "0", "css_box_shadow_v": "0", "css_box_shadow_blur": "0", "css_box_shadow_spread": "0", "css_box_shadow_color": "black", "css_box_shadow_inset": "", "css_rotate": "0", "css_z_index": "3", "css_opacity": "1", "an_use": "0", "an_text": "0%{opacity:0;}100%{opacity:1;}", "an_duration": "2", "an_timing_function": "ease", "an_delay": "0", "an_iteration_count": "1", "an_use_1": "0", "an_text_1": "0%{opacity:0;}100%{opacity:1;}", "an_duration_1": "2", "an_timing_function_1": "ease", "an_delay_1": "0", "an_iteration_count_1": "1", "sm_link": "", "click_an_start_smid": "", "click_an_start_state": "0", "play_music": "0", "music_name": "", "mu_o_url": "", "music_loop": "0", "st_words": "1", "st_words_color": "#ffffff", "sm_father_id": "0", "can_edit": "0", "auto_bili": "0" }, { "sm_type": "words", "smaterial_id": "", "css_width": "100", "css_height": "100", "css_margin_top": "250", "css_margin_left": "150", "css_background_color": "rgba(255,255,255,0)", "css_border_width": "0", "css_border_style": "solid", "css_border_position": "border", "css_border_color": "black", "css_border_radius": "0", "css_box_shadow_h": "0", "css_box_shadow_v": "0", "css_box_shadow_blur": "0", "css_box_shadow_spread": "0", "css_box_shadow_color": "black", "css_box_shadow_inset": "", "css_rotate": "0", "css_z_index": "4", "css_opacity": "1", "an_use": "0", "an_text": "0%{opacity:0;}100%{opacity:1;}", "an_duration": "2", "an_timing_function": "ease", "an_delay": "0", "an_iteration_count": "1", "an_use_1": "0", "an_text_1": "0%{opacity:0;}100%{opacity:1;}", "an_duration_1": "2", "an_timing_function_1": "ease", "an_delay_1": "0", "an_iteration_count_1": "1", "sm_link": "", "click_an_start_smid": "", "click_an_start_state": "0", "play_music": "0", "music_name": "", "mu_o_url": "", "music_loop": "0", "st_words": "点击此123123123123123...", "st_words_line_height": "normal", "st_words_animation_type": "0", "st_words_animation_delay": "0", "st_words_color": "#808080", "st_words_shadow_color": "", "st_words_font": "", "st_words_size": "15", "st_words_bold": "0", "st_words_italic": "0", "st_words_spacing": "0", "st_words_align": "0", "sm_father_id": "0", "can_edit": "0", "auto_bili": "0", "st_video_mp4_url": "" }]



// 用户登录
function _userLogin(userInput) {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: dev_Url + `/login`,
        method: "post",
        data: qs.stringify({ username: userInput.user, password: userInput.password }),
    });
}
// 获取页面列表
function _showPage() {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: dev_Url + `/api/page/getpages`,
        method: "post",
        data: qs.stringify({ showId: 348983 }),
    });
}

// 获取请柬列表
function _showPageList() {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/getshows`,
        method: "post",
        data: '',
    });
}

// 新建请柬
function _addPage() {
    // 账号密码错误报404
    return request({
        baseURL: '',
        url: dev_Url + `/api/show/createshow`,
        method: "post",
        data: '',
    });
}

export { _userLogin, _showPage, _addPage, _showPageList }