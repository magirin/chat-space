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
- has_many :chat_groups

- comment table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comment|string|null: false|
|user_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :chat_group



- chat_group table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :comments




