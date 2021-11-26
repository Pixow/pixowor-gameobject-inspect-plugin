import { NodeType } from "game-capsule";


export const EntityNodeSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
      title: "ID",
      disabled: true,
    },
    name: {
      type: "string",
      title: "名称",
    },
    sn: {
      type: "string",
      title: "SN",
    },
  },
};

export const MapSizeSchema = {
  type: "object",
  properties: {
    rows: {
      type: "number",
      title: "高",
      desc: "单位:格子",
      format: "input:number"
    },
    cols: {
      type: "number",
      title: "宽",
      desc: "单位:格子",
      format: "input:number"
    },
  },
};

export const GroundWalkableCollectionSchema= {
  type: "object",
  properties: {
    data: {
      type: "array",
      title: "可行走区域数据"
    }
  }
}

export const LocationSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "节点名称",
    },
    x: {
      type: "number",
      title: "x轴",
      format: "input:number"
    },
    y: {
      type: "number",
      title: "y轴",
      format: "input:number"
    },
    z: {
      type: "number",
      title: "z轴",
      format: "input:number"
    },
  },
};

export const DisplaySchema = {
  type: "object",
  properties: {
    dataPath: {
      type: "string",
      title: "数据路径",
    },
    texturePath: {
      type: "string",
      title: "纹理路径",
    },
  },
};

export const EventEntitySchema = {
  type: "object",
  properties: {
    eventName: {
      type: "number",
      title: "事件触发",
      desc: "触发事件的接口",
      format: "select"
    },
  },
};

export const AttributeSchema = {
  type: "object",
  properties: {
    key: {
      type: "string",
      title: "键",
    },
    type: {
      type: "string",
      title: "类型",
      format: "select",
      enum: ["string", "integer", "boolean", "media"],
      enumNames: ["字符串类型", "数字类型", "布尔类型", "媒体类型"],
    },
    description: {
      type: "string",
      title: "描述",
      format: "textarea",
    },
    strVal: {
      type: "string",
      title: "字符串类型值",
      format: "textarea",
    },
    intVal: {
      type: "number",
      title: "数字类型值",
      format: "input:number",
    },
    boolVal: {
      type: "boolean",
      title: "布尔类型值",
      format: "input:checkbox",
    },
    media: {
      type: "string",
      title: "媒体类型值",
      format: "input:file",
    },
  },
};

export const FunctionSchema = {
  type: "object",
  properties: {
    fileName: {
      type: "string",
      title: "脚本",
      format: "code-editor",
    },
    funcName: {
      type: "string",
      title: "方法名称",
      disabled: true,
    },
  },
};


export const PackageSchema = {
  type: "object",
  properties: {
    access: {
      type: "number",
      title: "背包类型",
      enum: [1, 2, 65535],
    },
  },
};

export const PackageItemSchema = {
  type: "object",
  properties: {
    des: {
      type: "string",
      title: "描述",
      format: "textarea",
    },
  },
};

export const AnimationsSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "节点名称",
    },
    dir: {
      type: "number",
      title: "方向",
      format: "select",
      enum: [1, 3],
      enumNames: ["后", "前"]
    },
    defaultAnimation: {
      type: "string",
      title: "默认动画",
    },
  },
};

export const SettingSchema = {
  type: "object",
  properties: {
    sceneid: {
      type: "number",
      title: "游戏初始场景",
      desc: "进入游戏的初始场景",
      format: "select",
    },
    spawnpoint: {
      type: "number",
      title: "玩家初始出生点",
      desc: "玩家进入游戏时的出生位置",
      format: "select",
    },
    maxNumber: {
      type: "number",
      title: "游戏最大人数",
      desc: "游戏允许进入的最大人数",
    },
  },
};

export const MovableSchema = {};
export const CampSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      title: "阵营名称",
      desc: "玩家阵营的名称",
    },
    maxNumber: {
      type: "number",
      title: "阵营最大人数",
      desc: "每个阵营允许的最大人数",
    },
  },
};

export const CommoditySchema = {
  type: "object",
  properties: {
    price: {
      type: "number",
      title: "价格",
      desc: "设置商品价格",
    },
    description: {
      type: "string",
      title: "商品描述",
      desc: "设置商品描述",
      format: "textarea",
    },
  },
};

export const AvatarSchema = {
  type: "object",
  properties: {
    curAnimation: {
      type: "string",
      title: "当前动作",
      desc: "设置 NPC 的动作",
      format: "select",
    },
    dir: {
      type: "number",
      title: "方向",
      desc: "NPC 方向",
      format: "select",
      enum: [1, 3],
      enumNames: ["后", "前"],
    },
  },
};

export const TimerSchema = {
  type: "object",
  properties: {
    timeout: {
      type: "number",
      title: "计时时长",
      desc: "倒计时的时间长度",
    },
    interval: {
      type: "number",
      title: "计时器间隔",
      desc: "单位计时跨度",
    },
  },
};

export const AnimationDataSchema = {};

export const UISchema = {
  type: "object",
  properties: {
    text: {
      type: "string",
      title: "交互文本",
      desc: "UI交互文本内容",
    },
  },
};

export const TextSchema = {};

export const ScenerySchema = {
  type: "object",
  properties: {
    uris: {
      type: "array",
      title: "资源路径",
      desc: "布景的图片资源地址,相对路径",
      format: "scenery-files",
    },
    depth: {
      type: "number",
      title: "景深",
      desc: "舞台（游戏画面）的景深为0，背景的景深为负值，前景的景深为正值",
    },
    offset: {
      type: "object",
      title: "偏移量",
      properties: {
        x: {
          type: "number",
        },
        y: {
          type: "number",
        },
      },
      format: "2d-coordinates",
    },
    speed: {
      type: "number",
      title: "速度",
      desc: "跟随舞台的速度加成，比主舞台快为正数，比主舞台移动慢为负数",
    },
    fit: {
      type: "number",
      title: "图片填充模式",
      format: "select",
      enum: [1, 2, 3, 4],
      enumNames: ["居中", "填充", "拉伸", "平铺"],
      desc: "居中、填充、拉伸、平铺",
    },
    width: {
      type: "number",
      title: "宽",
      disabled: true,
    },
    height: {
      type: "number",
      title: "高",
      disabled: true,
    },
  },
};


export const BaseConfigObjectSchemas: { [k: number]: any } = {
  [NodeType.PackageType]: PackageSchema,
  [NodeType.PackageItemType]: PackageItemSchema,
  [NodeType.LocationType]: LocationSchema,
  [NodeType.MovableType]: MovableSchema,
  [NodeType.DisplayType]: DisplaySchema,
  [NodeType.AttributeType]: AttributeSchema,
  [NodeType.FunctionType]: FunctionSchema,
  [NodeType.AnimationsType]: AnimationsSchema,
  [NodeType.EventType]: EventEntitySchema,
  [NodeType.MapSizeType]: MapSizeSchema,
  [NodeType.GroundWalkableCollectionType]: GroundWalkableCollectionSchema,
  [NodeType.CampType]: CampSchema,
  [NodeType.AnimationDataType]: AnimationDataSchema,
  [NodeType.UIType]: UISchema,
  [NodeType.TextType]: TextSchema,
  [NodeType.SettingsType]: SettingSchema,
  [NodeType.CommodityType]: CommoditySchema,
  [NodeType.AvatarType]: AvatarSchema,
  [NodeType.TimerType]: TimerSchema,
  [NodeType.SceneryType]: ScenerySchema,
};
