# DB  設計

- user table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|cradte_date|string|null: false|
|post_image|string|null: false|

### Association
- has_many :comments
- has_many :rooms


- room table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :room_comments
- has_many :comments,through: :room_comment


- comment table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comment|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|room_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- has_many :room_comments
- has_many :rooms,through: :room_comment


- room_comment table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comment_id|integer|null: false, foreign_key: true|
|room_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :comment
- belongs_to :room
