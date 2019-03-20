# DB  設計

- user table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|nickname|string|null: false|
|cradte_date|string|null: false|
|avotar_image|string|null: false|
|post_image|string|null: false|

### Association
- has_many :comments
- has_many :user_chat_group
- has_many :chat_groups,though: :user_chat_group



- chat_group table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments
- has_many :user_chat_group
- has_many :user,though: :user_chat_group


- comment table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comment|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|chat_group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :chat_group



- user_chat_group table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|chat_group_id|integer|null: false, foreign_key: true|


### Association
- has_many :chat_groups
- has_many :users





