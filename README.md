# DB  設計

# user table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|cradte_date|string|null: false|
|post_image|string|null: false|

### Association,
- has_many :comments
- has_many :room_users
- has_many :rooms,through: :room_users


# room table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|room_name|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|comment_id|integer|null: false, foreign_key: true|

### Association
- has_many :comments
- has_many :room_users
- has_many :users,through: :room_users


# comment table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|comment|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|room_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :room


# room_user table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|room_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :room
