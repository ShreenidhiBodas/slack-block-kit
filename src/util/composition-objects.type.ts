declare interface TEXT {
  type: 'plain_text' | 'mrkdwn'
  text: string,
  emoji?: boolean,
  verbatim?: boolean
};

declare interface PLAIN_TEXT extends TEXT {
  type: 'plain_text'
};

declare interface MRKDWN_TEXT extends TEXT {
  type: 'mrkdwn'
};


declare interface CONFIRMATION {
  title: PLAIN_TEXT,
  text: TEXT,
  confirm: PLAIN_TEXT,
  deny: PLAIN_TEXT,
  style?: 'primary' | 'danger'
};

declare interface OPTION {
  text: PLAIN_TEXT | TEXT,
  value: string,
  description?: PLAIN_TEXT,
  url?: string
};

declare interface OPTION_GROUP {
  label: PLAIN_TEXT,
  options: OPTION[] // Hanle empty array in getter
};

declare interface DISPATCH_ACTION_CONFIG {
  trigger_actions_on: ('on_enter_pressed' | 'on_character_entered')[] // Handle empty array in getter
};

declare interface FILT_OBJ_CONV_LIST {
  include?: ('im' | 'mpim' | 'private' | 'public')[],
  exclude_external_shared_channels?: boolean,
  exclude_bot_users?: boolean
};