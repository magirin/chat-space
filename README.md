# DB  設計

# user table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false, unique: true, index: true|
|mail|string|null: false|
|password|string|null: false|

### Association,
- has_many :posts
- has_many :room_users
- has_many :rooms,through: :room_users


# room table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|


### Association
- has_many :posts
- has_many :room_users
- has_many :users,through: :room_users


# post table

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|post|string|null: false|
|post_image|string|null: false|
|cradted_at|string|null: false|
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
